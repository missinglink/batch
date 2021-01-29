define({ "api": [
  {
    "type": "get",
    "url": "/api/dash/collections",
    "title": "Collection Counts",
    "version": "1.0.0",
    "name": "collections",
    "group": "Analytics",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "filename": "./index.js",
    "groupTitle": "Analytics"
  },
  {
    "type": "get",
    "url": "/api/dash/traffic",
    "title": "Session Counts",
    "version": "1.0.0",
    "name": "traffic",
    "group": "Analytics",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Report anonymouns traffic data about the number of user session created in a given day.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"datasets\": [{\n        \"label\": \"Unique Daily Sessions\" ,\n        \"data\": [{\n            \"x\": \"2020-08-19T06:00:00.000Z\",\n            \"y\": 145\n        }]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Analytics"
  },
  {
    "type": "post",
    "url": "/api/collections",
    "title": "Create Collection",
    "version": "1.0.0",
    "name": "CreateCollection",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Create a new collection</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "sources",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>Size of collection in bytes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the collection</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "sources",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>The date on which this collection was uploaded</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": "<p>The size of the collection in bytes</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/collections/:collection/data",
    "title": "Get Collection Data",
    "version": "1.0.0",
    "name": "DataCollection",
    "group": "Collections",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Download a given collection file</p> <p>Note: the user must be authenticated to perform a download. One of our largest costs is S3 egress, authenticatd downloads allow us to prevent abuse and keep the project running and the data freetw</p> <p>Faster Downloads? Have AWS? The Jobs, Data, &amp; Collections API all return an <code>s3</code> property which links to a requester pays object on S3. For those that are able, this is the best way to download data.</p> <p>OpenAddresses is entirely funded by volunteers (many of then the developers themselves!) Please consider donating if you are able https://opencollective.com/openaddresses</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "delete",
    "url": "/api/collections/:collection",
    "title": "Delete Collection",
    "version": "1.0.0",
    "name": "DeleteCollection",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Delete a collection (This should not be done lightly)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/collections",
    "title": "List Collections",
    "version": "1.0.0",
    "name": "ListCollections",
    "group": "Collections",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return a list of all collections and their glob rules</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": "<p>Download size in bytes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "s3",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Unknown",
            "optional": false,
            "field": "sources",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "patch",
    "url": "/api/collections/:collection",
    "title": "Patch Collection",
    "version": "1.0.0",
    "name": "PatchCollection",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Update a collection</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "created",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "sources",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>Size of collection in bytes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the collection</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "sources",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>The date on which this collection was uploaded</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": "<p>The size of the collection in bytes</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/data",
    "title": "List Data",
    "version": "1.0.0",
    "name": "ListData",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Get the latest successful run of a given geographic area</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Filter results by source name</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "layer",
            "description": "<p>Filter results by layer type</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Filter results by layer name</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "point",
            "description": "<p>Filter results by geographic point '{lng},{lat}'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "job",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "s3",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.cache",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.preview",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/:data",
    "title": "Get Data",
    "version": "1.0.0",
    "name": "SingleData",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return all information about a specific data segment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":data",
            "description": "<p>Data ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "job",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "s3",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.cache",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "output.preview",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/:data/history",
    "title": "Return Data History",
    "version": "1.0.0",
    "name": "SingleHistoryData",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return the job history for a given data component</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":data",
            "description": "<p>Data ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "jobs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Pending\"",
              "\"Success\"",
              "\"Fail\"",
              "\"Warn\""
            ],
            "optional": false,
            "field": "jobs.status",
            "description": "<p>The current status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.s3",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobs.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jobs.output.cache",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jobs.output.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jobs.output.preview",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs.count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobs.stats",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/api/github/event",
    "title": "Github Webhook",
    "version": "1.0.0",
    "name": "Event",
    "group": "Github",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Callback endpoint for GitHub Webhooks. Should not be called by user functions</p>",
    "filename": "./index.js",
    "groupTitle": "Github"
  },
  {
    "type": "get",
    "url": "/api/job/error/count",
    "title": "Job Error Count",
    "version": "1.0.0",
    "name": "ErrorCount",
    "group": "JobError",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 123\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "post",
    "url": "/api/job/error",
    "title": "Create Job Error",
    "version": "1.0.0",
    "name": "ErrorCreate",
    "group": "JobError",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job",
            "description": "<p>Job ID of the given error</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Text representation of the error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job\": 123,\n    \"message\": \"Failed to download source\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "get",
    "url": "/api/job/error",
    "title": "Get Job Errors",
    "version": "1.0.0",
    "name": "ErrorList",
    "group": "JobError",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "post",
    "url": "/api/job/error/:job",
    "title": "Resolve Job Error",
    "version": "1.0.0",
    "name": "ErrorManager",
    "group": "JobError",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "patch",
    "url": "/api/job/:job",
    "title": "Update Job",
    "version": "1.0.0",
    "name": "JobPatch",
    "group": "Job",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/api/job/:job",
    "title": "Rerun Job",
    "version": "1.0.0",
    "name": "JobRerun",
    "group": "Job",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job",
    "title": "List Jobs",
    "version": "1.0.0",
    "name": "List",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Limit number of returned jobs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "run",
            "description": "<p>Only show job associated with a given ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "Success,Fail,Pending,Warn",
            "description": "<p>Only show job with one of the given statuses</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "live",
            "defaultValue": "All",
            "description": "<p>Only show jobs associated with a live run</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "before",
            "defaultValue": "",
            "description": "<p>Only show jobs before the given date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "after",
            "defaultValue": "",
            "description": "<p>Only show jobs after the given date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Filter results by source name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "?limit",
          "content": "?limit=12",
          "type": "String"
        },
        {
          "title": "?run",
          "content": "?run=12",
          "type": "String"
        },
        {
          "title": "?status",
          "content": "?status=Warn\n?status=Warn,Pending\n?status=Success,Fail,Pending,Warn",
          "type": "String"
        },
        {
          "title": "?env",
          "content": "?env=true\n?env=false",
          "type": "String"
        },
        {
          "title": "?before",
          "content": "?before=2020-01-01\n?before=2020-12-01",
          "type": "String"
        },
        {
          "title": "?after",
          "content": "?after=2020-01-01\n?after=2020-12-01",
          "type": "String"
        },
        {
          "title": "?source",
          "content": "?source=us/ca",
          "type": "String"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/sample",
    "title": "Small Sample",
    "version": "1.0.0",
    "name": "SampleData",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return an Array containing a sample of the properties</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job",
    "title": "Get Job",
    "version": "1.0.0",
    "name": "Single",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"s3\": \"s3://v2.openaddresses.io/test/job/1/source.geojson.gz\",\n    \"run\": 187\n    \"size\": 4325643264,\n    \"map\": null;\n    \"created\": \"2020-08-03T17:37:47.036Z\",\n    \"source_name\":\"us/wy/lincoln\",\n    \"source\":\"https://raw.githubusercontent.com/openaddresses/openaddresses/0f2888ba5bd572f844991f8ea0bef9c39fa39ada/sources/us/wy/lincoln.json\",\n    \"layer\":\"addresses\",\n    \"name\":\"country\",\n    \"output\":{\n        \"cache\":true,\n        \"output\":true,\n        \"preview\":true\n    },\n    \"loglink\":\"batch-staging-job/default/bfdd23b5-9575-4344-93d3-bf9cacd4761c\",\n    \"status\":\"Success\",\n    \"version\":\"1.0.0\",\n    \"count\":4257,\n    \"bounds\":{\"type\":\"Polygon\",\"coordinates\": [\"..geojson coords here..\"],\n    \"stats\":{\n        \"counts\":{\n            \"city\":0,\n            \"unit\":0,\n            \"number\":4244,\n            \"region\":0,\n            \"street\":4257,\n            \"district\":0,\n            \"postcode\":0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/delta",
    "title": "Job Stats Comparison",
    "version": "1.0.0",
    "name": "SingleDelta",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "description": "<p>Compare the stats of the given job against the current live data job</p>",
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/log",
    "title": "Get Job Log",
    "version": "1.0.0",
    "name": "SingleLog",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/cache.zip",
    "title": "Get Job Cache",
    "version": "1.0.0",
    "name": "SingleOutputCache",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Note: the user must be authenticated to perform a download. One of our largest costs is S3 egress, authenticatd downloads allow us to prevent abuse and keep the project running and the data freetw</p> <p>Faster Downloads? Have AWS? The Jobs, Data, &amp; Collections API all return an <code>s3</code> property which links to a requester pays object on S3. For those that are able, this is the best way to download data.</p> <p>OpenAddresses is entirely funded by volunteers (many of then the developers themselves!) Please consider donating if you are able https://opencollective.com/openaddresses</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/source.geojson.gz",
    "title": "Get Job Data",
    "version": "1.0.0",
    "name": "SingleOutputData",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Note: the user must be authenticated to perform a download. One of our largest costs is S3 egress, authenticatd downloads allow us to prevent abuse and keep the project running and the data freetw</p> <p>Faster Downloads? Have AWS? The Jobs, Data, &amp; Collections API all return an <code>s3</code> property which links to a requester pays object on S3. For those that are able, this is the best way to download data.</p> <p>OpenAddresses is entirely funded by volunteers (many of then the developers themselves!) Please consider donating if you are able https://opencollective.com/openaddresses</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/source.png",
    "title": "Get Job Preview",
    "version": "1.0.0",
    "name": "SingleOutputPreview",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Create Session",
    "version": "1.0.0",
    "name": "CreateLogin",
    "group": "Login",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Log a user into the service and create an authenticated cookie</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "uid",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": false,
            "field": "access",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "flags",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/forgot",
    "title": "Forgot Login",
    "version": "1.0.0",
    "name": "ForgotLogin",
    "group": "Login",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>If a user has forgotten their password, send them a password reset link to their email</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username or email to reset password of</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/api/login",
    "title": "Session Info",
    "version": "1.0.0",
    "name": "GetLogin",
    "group": "Login",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Return information about the currently logged in user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "uid",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": false,
            "field": "access",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "flags",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/reset",
    "title": "Reset Login",
    "version": "1.0.0",
    "name": "ResetLogin",
    "group": "Login",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Once a user has obtained a password reset by email via the Forgot Login API, use the token to reset the password</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Email provided reset token</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new user password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/api/map",
    "title": "Coverage TileJSON",
    "version": "1.0.0",
    "name": "TileJSON",
    "group": "Map",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Data required for map initialization</p>",
    "filename": "./index.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/api/map/:z/:x/:y.mvt",
    "title": "Coverage MVT",
    "version": "1.0.0",
    "name": "VectorTile",
    "group": "Map",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Retrive coverage Mapbox Vector Tiles</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "z",
            "description": "<p>Z coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": "<p>X coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": "<p>Y coordinate</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Map"
  },
  {
    "type": "post",
    "url": "/api/run",
    "title": "Create Run",
    "version": "1.0.0",
    "name": "CreateRun",
    "group": "Run",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Create a new run to hold a batch of jobs</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Null/Object",
            "optional": false,
            "field": "github",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "github",
            "description": "<p>Used by the data-pls CI tool</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.ref",
            "description": "<p>Git reference (branch) of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.sha",
            "description": "<p>Git SHA of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.url",
            "description": "<p>Github URL to the specific commit</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "github.check",
            "description": "<p>Github check ID to update</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "closed",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run",
    "title": "List Runs",
    "version": "1.0.0",
    "name": "ListRuns",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Runs are container objects that contain jobs that were started at the same time or by the same process</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":data",
            "description": "<p>Data ID</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "Integer",
            "size": "-∞ - 100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Limit number of returned runs</p>"
          },
          {
            "group": "Query",
            "type": "Integer",
            "optional": true,
            "field": "run",
            "description": "<p>Only show run associated with a given ID</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"Pending\"",
              "\"Success\"",
              "\"Fail\"",
              "\"Warn\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>The current status</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "before",
            "description": "<p>Only show runs before the given date</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "after",
            "description": "<p>Only show runs after the given date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": "<p>If true, successful jobs immediately become the most recent live data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "github",
            "description": "<p>Used by the data-pls CI tool</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.ref",
            "description": "<p>Git reference (branch) of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.sha",
            "description": "<p>Git SHA of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.url",
            "description": "<p>Github URL to the specific commit</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "github.check",
            "description": "<p>Github check ID to update</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Is the Run still accepting jobs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Pending\"",
              "\"Success\"",
              "\"Fail\"",
              "\"Warn\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The current status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs",
            "description": "<p>The number of jobs in this run</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run/count",
    "title": "Run Stats",
    "version": "1.0.0",
    "name": "RunStats",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return statistics about jobs within a given run</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "run",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.Warn",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.Success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.Pending",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.Fail",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run",
    "title": "Get Run",
    "version": "1.0.0",
    "name": "Single",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "github",
            "description": "<p>Used by the data-pls CI tool</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.ref",
            "description": "<p>Git reference (branch) of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.sha",
            "description": "<p>Git SHA of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.url",
            "description": "<p>Github URL to the specific commit</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "github.check",
            "description": "<p>Github check ID to update</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "closed",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run/jobs",
    "title": "List Run Jobs",
    "version": "1.0.0",
    "name": "SingleJobs",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return all jobs for a given run</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "run",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "jobs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs.run",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Null/Integer",
            "optional": false,
            "field": "jobs.map",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.source",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Source_name",
            "optional": false,
            "field": "jobs.source_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.layer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Name",
            "optional": false,
            "field": "jobs.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobs.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jobs.output.cache",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jobs.output.output",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "jobs.output.preview:",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.loglink",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Pending\"",
              "\"Success\"",
              "\"Fail\"",
              "\"Warn\""
            ],
            "optional": false,
            "field": "jobs.status",
            "description": "<p>The current status</p>"
          },
          {
            "group": "Success 200",
            "type": "Stats",
            "optional": false,
            "field": "jobs.stats",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Null/Integer",
            "optional": false,
            "field": "jobs.count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Null",
            "optional": false,
            "field": "jobs.bounds",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobs.version",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "jobs.size",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "post",
    "url": "/api/run/:run/jobs",
    "title": "Populate Run Jobs",
    "version": "1.0.0",
    "name": "SingleJobsCreate",
    "group": "Run",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Given an array sources, explode it into multiple jobs and submit to batch or pass in a predefined list of sources/layer/names</p> <pre><code>Note: once jobs are attached to a run, the run is &quot;closed&quot; and subsequent jobs cannot be attached to it</code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "run",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "jobs",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "patch",
    "url": "/api/run/:run",
    "title": "Update Run",
    "version": "1.0.0",
    "name": "Update",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Update an existing run</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "live",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "closed",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Null/Object",
            "optional": true,
            "field": "github",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "github",
            "description": "<p>Used by the data-pls CI tool</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.ref",
            "description": "<p>Git reference (branch) of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.sha",
            "description": "<p>Git SHA of the given run</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github.url",
            "description": "<p>Github URL to the specific commit</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "github.check",
            "description": "<p>Github check ID to update</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "closed",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "post",
    "url": "/api/schedule",
    "title": "Scheduled Event",
    "version": "1.0.0",
    "name": "Schedule",
    "group": "Schedule",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Internal function to allow scheduled lambdas to kick off events</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"collect\"",
              "\"sources\""
            ],
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Server Healthcheck",
    "version": "1.0.0",
    "name": "Health",
    "group": "Server",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>AWS ELB Healthcheck for the server</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "healthy",
            "description": "<p>Is the service healthy?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The service on how it is doing</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Server"
  },
  {
    "type": "get",
    "url": "/api",
    "title": "Get Metadata",
    "version": "1.0.0",
    "name": "Meta",
    "group": "Server",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return basic metadata about server configuration</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The version of the API</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Server"
  },
  {
    "type": "post",
    "url": "/api/token",
    "title": "Create Token",
    "version": "1.0.0",
    "name": "CreateToken",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Create a new API token for programatic access</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human Readable name of the API Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human Readable name of the API Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "type": "delete",
    "url": "/api/token/:id",
    "title": "Delete Token",
    "version": "1.0.0",
    "name": "DeleteToken",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Delete a user's API Token</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "type": "get",
    "url": "/api/token",
    "title": "List Tokens",
    "version": "1.0.0",
    "name": "ListTokens",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>List all tokens associated with the requester's account</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of users with the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tokens.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokens.created",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokens.name",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/api/upload",
    "title": "Create Upload",
    "version": "1.0.0",
    "name": "upload",
    "group": "Upload",
    "permission": [
      {
        "name": "upload",
        "title": "Upload",
        "description": "<p>The user must be an admin or have the &quot;upload&quot; flag enabled on their account</p>"
      }
    ],
    "description": "<p>Statically cache source data</p> <pre><code>If a source is unable to be pulled from directly, authenticated users can cache data resources to the OpenAddresses S3 cache to be pulled from</code></pre>",
    "filename": "./index.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "Create User",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Create a new user</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": true,
            "field": "total",
            "description": "<p>Total number of users with the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "users",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": false,
            "field": "users.access",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.flags",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "List Users",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Return a list of users that have registered with the service</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Integer",
            "size": "-∞ - 100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Limit number of returned runs</p>"
          },
          {
            "group": "Query",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "defaultValue": "100",
            "description": "<p>The offset based on limit to return</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "filter",
            "defaultValue": "",
            "description": "<p>Filter a complete or partial username/email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of users with the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": false,
            "field": "users.access",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.flags",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/api/user/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "PatchUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Update information about a given user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>The UID of the user to update</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": true,
            "field": "flags",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": true,
            "field": "access",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": true,
            "field": "total",
            "description": "<p>Total number of users with the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "users",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": false,
            "field": "users.access",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.flags",
            "description": ""
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "User"
  }
] });
