const ErrorResponse = require("../utilities/errorResponse");
const filterMailchimpResponse = require("../utilities/filterMailchimpResponse");
const MailchimpMarketingModel = require("../models/mailChimpModel");
const md5 = require("md5");
const { validMember } = require("../models/memberModel");

const { AUDIENCE_ID } = process.env;

const createMember = async (req, res, next) => {
	try {
		const { error } = validMember(req.body);
		if (error) {
			res.json({ error: error.details[0].message });
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		await MailchimpMarketingModel.lists
			.addListMember(AUDIENCE_ID, {
				email_address: req.body.Email,
				status: "subscribed",
			})
			.then((response) => {
				const { email_address, status } = response;
				res.status(200).json({ message: "user added", email_address, status });
			})
			.catch((err) => res.json({ text: JSON.parse(err.response.text).detail }));
	} catch (e) {
		next(new ErrorResponse(e, 500));
	}
};

const updateMember = async (req, res, next) => {
	try {
		const { error } = validMember(req.body);
		if (error) {
			res.json({ error: error.details[0].message }).status(301);
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		const hashSubcriber = md5(req.params.Email);

		await MailchimpMarketingModel.lists
			.updateListMember(AUDIENCE_ID, hashSubcriber, {
				email_address: req.body.Email,
				status_if_new: "subscribed",
			})
			.then((response) =>
				res.status(200).json({ message: "user updated", response })
			)
			.catch((err) => res.json({ text: JSON.parse(err.response.text).detail }));
	} catch (e) {
		next(new ErrorResponse("Bad request", 301));
	}
};

const getAllMembers = async (req, res, next) => {
	try {
		const { members } = await MailchimpMarketingModel.lists.getListMembersInfo(
			AUDIENCE_ID
		);
		if (!members) {
			next(new ErrorResponse("bad request", 301));
		}
		try {
			const subscribers = filterMailchimpResponse(members);
			res.status(200).json({ message: "users list", subscribers });
		} catch (e) {
			console.log("one of the fields not exist");
			next(new ErrorResponse("server error", 500));
		}
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const getMember = async (req, res, next) => {
	const subscriberHash = md5(req.params.Email);
	const { Email } = req.params;
	try {
		const { error } = validMember({ Email });
		if (error) {
			res.json({ error: error.details[0].message }).status(301);
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		const { email_address, status } =
			await MailchimpMarketingModel.lists.getListMember(
				AUDIENCE_ID,
				subscriberHash
			);

		res.status(200).json({ email_address, status });
	} catch (e) {
		next(new ErrorResponse("Server error", 500));
	}
};

const deleteMember = async (req, res, next) => {
	const subscriberHash = md5(req.params.Email);
	const { Email } = req.params;
	try {
		const { error } = validMember({ Email });
		if (error) {
			res.json({ error: error.details[0].message }).status(301);
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	await MailchimpMarketingModel.lists
		.deleteListMemberPermanent(AUDIENCE_ID, subscriberHash)
		.then((response) =>
			res.status(200).json({ message: "user deleted", response })
		)
		.catch((err) =>
			res.json({ text: JSON.parse(err.response.text).detail }).status(500)
		);
};

module.exports = {
	createMember,
	getAllMembers,
	getMember,
	updateMember,
	deleteMember,
};
