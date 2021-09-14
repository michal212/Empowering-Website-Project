const campaginRouter = require("express").Router();

const campaginController = require("../controllers/campaginController");

campaginRouter.get(
	"/getCampaignsSorted",
	campaginController.getCampaignsSorted
);
campaginRouter.get(
	"/getCampaignByTitle/:title",
	campaginController.getCampaignByTitle
);

campaginRouter.get(
	"/getDataFromMailChimp",
	campaginController.getDataFromMailChimp
);

module.exports = campaginRouter;