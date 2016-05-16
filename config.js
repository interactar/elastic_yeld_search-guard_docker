{
  "port" : 3000,
    "es_host" : "elasticsearch_host",
    "es_port" : "9200",
    "path" : "/opt/rules/",
    "index": "rulez",
    "type" : "rule",
    "defaults" : {
      "es_host" : "elasticsearch_host",
      "es_port" : 9200,
      "type"    : "frequency",
      "timestamp_field" : "fecha",
      "index" : "objetivos",
      "alert" : ["email"]
    }
}
