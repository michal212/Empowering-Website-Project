 const adminDB = {
    "getAllAdmins": {
  "success": {
    "res": {
      "statusCode": 200,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "data": [
        {
    "_id": "61231311Aaweacbed03fda6d",
    "username": "Yoni Bitew",
    "email": "yonibitew@gmail.com",
    "password": "01230123"
},
{
    "_id": "61231311Aaweacbed054asdd",
    "username": "Lior Solomon",
    "email": "liorsolomon@gmail.com",
    "password": "321123"
},
{
    "_id": "61231311Aaweacbed054asdd",
    "username": "Racheli Melkai",
    "email": "racheli@gmail.com",
    "password": "321123"
}
        
      ]
    }
  },
  "failure": {
    "res": {
      "statusCode": 404,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "error",
      "message": "That movie does not exist."
    }
  }
},
 "getOneAdmin": {
  "success": {
    "res": {
      "statusCode": 200,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "data": [
        {
          "_id": "614b9fa0df92314c81d69f06",
            "username": "Yoni Bitew",
            "email": "yonibitew@gmail.com",
            "password": "01230123"
        }
      ]
    }
  },
  "failure": {
    "res": {
      "statusCode": 404,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "error",
      "message": "That movie does not exist."
    }
  }
},
    "createAdmin": {
  "success": {
    "res": {
      "statusCode": 201,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "data": [
        {
          "_id": "614b9fa0df92314c81d69f06",
            "fullname": "יוני ביטאו",
            "role": "מייסדת",
            "image": "https://www.iconsdb.com/icons/preview/red/administrator-xxl.png",
            "description": "תיאור קצר על בעל התפקיד ועל המעשים שהוא עשה בקהילה",
            "__v": 0,
            "lang": "hebrew"
        },
        {
            "_id": "6133bca1faebadas48f88b8323",
            "fullname": "Yoni Bitew",
            "role": "Board of Directors",
            "image": "https://www.iconsdb.com/icons/preview/red/administrator-xxl.png",
            "description": "Small Descirtiopn about the job and his things he have done",
            "__v": 0,
            "lang": "english"
        }
      ]
    }
  },
  "failure": {
  "res": {
    "statusCode": 400,
    "headers": {
      "content-type": "application/json"
    }
  },
  "body": {
    "status": "error",
    "message": "Something went wrong."
  }
}
},
"loginAdmin": {
  "success": {
    "res": {
      "statusCode": 201,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "message":"admin is logged in!",
      "data": [
        {
          "_id": "614b9fa0df92314c81d69f06",
            "username": "Yoni Bitew",
            "email": "yonibitew@gmail.com",
            "password": "01230123"
        }
      ]
    }
  },
  "failure": {
  "res": {
    "statusCode": 400,
    "headers": {
      "content-type": "application/json"
    }
  },
  "body": {
    "status": "error",
    "message": "Wrong Details , admin not exists!"
  }
}
},
"updateAdminDetails": {
  "success": {
    "res": {
      "statusCode": 201,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "message":"admin details has changed!",
      "data": [
        {
          "_id": "614b9fa0df92314c81d69f06",
            "username": "Yoni Bitew",
            "email": "yonibitew@gmail.com",
            "password": "01230123"
        }
      ]
    }
  },
  "failure": {
  "res": {
    "statusCode": 404,
    "headers": {
      "content-type": "application/json"
    }
  },
  "body": {
    "status": "error",
    "message": "Admin details does not exist."
  }
}
},
"deleteAdmin": {
		"success": {
			"res": {
				"statusCode": 201,
				"headers": {
					"content-type": "application/json",
				},
			},
			"body": {
				"status": "success",
				"data": {
					"success": true,
					"message": "Admin Deleted!",
					"deletedAdmin": {
						"_id": "614b9fa0df92314c81d69f06",
						"username": "Yoni Bitew",
						"email": "yonibitew@gmail.com",
						"password": "01230123",
					},
				},
			},
		},
		"failure": {
			"res": {
				"statusCode": 400,
				"headers": {
					"content-type": "application/json",
				},
			},
			"body": {
				"status": "error",
			  "message": "Something went wrong.",
			},
		},
	},
}

module.exports = adminDB;