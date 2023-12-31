const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function deleteLike(req, res) {
  try {
    const userId = req.user._id;
    const card = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: userId } }, // убрать _id из массива, если он есть
      { new: true },
    );
    if (!card) {
      const error = new Error('Карточка не найдена');
      error.name = 'NotFoundError';
      throw error;
    }
    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { deleteLike };
