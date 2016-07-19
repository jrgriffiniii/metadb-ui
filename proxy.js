//https://sporades0.stage.lafayette.edu/concern/generic_works/2227mp65f.json
var http = require('http')
var https = require('https')
var url = require('url')

http.createServer(function (req, res) {
	res.setHeader('Content-Type', 'application/json')
	res.setHeader('Access-Control-Allow-Origin', '*')
	setTimeout(function () {
		res.end(`
			{
				"id": "2227mp65f",
				"create_date": "2016-07-14T16:22:55.847+00:00",
				"modified_date": "2016-07-14T16:23:01.699+00:00",
				"head": [
					{
						"id": "http://139.147.4.138:8083/fcrepo/rest/dev/22/27/mp/65/2227mp65f/list_source#g66871060"
					}
				],
				"tail": [
					{
						"id": "http://139.147.4.138:8083/fcrepo/rest/dev/22/27/mp/65/2227mp65f/list_source#g66871060"
					}
				],
				"depositor": "griffinj@lafayette.edu",
				"title": [
					"title4",
					"this is a subtitle"
				],
				"date_uploaded": "2016-07-14T16:22:55.342+00:00",
				"date_modified": "2016-07-14T16:22:55.398+00:00",
				"owner": null,
				"label": null,
				"relative_path": null,
				"import_url": null,
				"part_of": [],
				"resource_type": [],
				"creator": [
					"creator4"
				],
				"contributor": [],
				"description": [],
				"keyword": [
					"keyword4"
				],
				"rights": [
					"http://creativecommons.org/licenses/by/3.0/us/"
				],
				"publisher": [],
				"date_created": [],
				"subject": [],
				"language": [],
				"identifier": [],
				"based_near": [],
				"related_url": [],
				"bibliographic_citation": [],
				"source": [],
				"proxy_depositor": null,
				"on_behalf_of": null,
				"arkivo_checksum": null
			}
		`)
	}, 1500)
}).listen(8888, function () { console.log('listening @ http://localhost:8888')})


