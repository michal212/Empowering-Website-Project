const { validContact, contactModel } = require('../models/contactUsModel');
const ErrorResponse = require('../utilities/errorResponse');

const createContactInformation = async (req, res, next) => {
  try {
    const validBody = validContact(req.body);
    if (validBody.error) {
      res.status(301).json({ message: validBody.error.details[0].message });
    }
    const contactInformation = await contactModel.insertMany(req.body);
    if (!contactInformation) {
      next(new ErrorResponse('failed to add contactInformation', 301));
    }
    res
      .status(200)
      .json({ message: 'Contact information added', contactInformation });
  } catch (e) {
    console.log('failed to add contactInformation ');
    next(new ErrorResponse('failed to add contactInformation', 500));
  }
};

const getAllContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactModel.find({});

    if (!contactInformation) {
      next(new ErrorResponse('No ContactInformation saved, please add', 400));
    }
    res.status(200).json({ contactInformation });
  } catch (e) {
    console.log('failed to add contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

const getContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactModel.findById(req.params.id);
    if (!contactInformation) {
      next(new ErrorResponse('No ContactInformation found', 301));
    }
    res
      .status(200)
      .json({ message: 'contact information', contactInformation });
  } catch (e) {
    console.log('failed to add contact information ');
    next(new ErrorResponse('Server Error', 500));
  }
};

const updateContactInformation = async (req, res, next) => {
  try {
    const validBody = validContact(req.body);
    if (validBody.error) {
      res.json({ message: validBody.error.details[0].message }).status(200);
    }
    const contactInformation = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!contactInformation) {
      next(new ErrorResponse('failed to update contact information', 301));
    }

    res.status(200).json({ message: 'contact updated', contactInformation });
  } catch (e) {
    console.log('failed to update contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

const deleteContactInformation = async (req, res, next) => {
  try {
    const contactExists = await contactModel.findById(req.params.id);
    if (!contactExists) {
      next(
        new ErrorResponse(
          'failed to delete contactInformation, check id again',
          301
        )
      );
    }
    const contactInformation = await contactModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({ message: 'contact deleted', contactExists });
  } catch (e) {
    next(new ErrorResponse('Server Error', 500));
  }
};

module.exports = {
  createContactInformation,
  getAllContactInformation,
  updateContactInformation,
  deleteContactInformation,
  getContactInformation,
};
