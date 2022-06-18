const Poll = require('./Poll');

exports.createPollGetController = (req, res, next) => {
  res.render('create');
};

exports.createPollPostController = async (req, res, next) => {
  let { title, description, options } = req.body;

  options = options.map((option) => {
    return {
      name: option,
      vote: 0,
    };
  });

  const poll = new Poll({
    title,
    description,
    options,
  });

  try {
    await poll.save();
    res.redirect('/polls');
  } catch (e) {
    console.log(e);
  }
};

exports.getAllPolls = async (req, res, next) => {
  try {
    let polls = await Poll.find();
    res.render('pollList', { polls });
  } catch (e) {
    console.log(e);
  }
};

exports.viewPollGetController = async (req, res, next) => {
  let id = req.params.id;
  try {
    let poll = await Poll.findById(id);
    res.render('viewPoll', { poll });
  } catch (e) {
    console.log(e);
  }
};
