# MarkLogic Document Extraction Demo
This demo exhibits how to extract text and search for keywords in Microsoft Word (.docx) files.

## Requirements
  - [Java JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
  - [MarkLogic Server 9.0.9](https://developer.marklogic.com/products) or later
  - [Gradle 4.6](https://gradle.org/) or later

## Installation
In a terminal window, clone this repository:

```
https://github.com/trevorkennedy/marklogic-docx-demo
```

## Starting

Change to your local repo directory:

```
cd marklogic-docx-demo
```

Start the Data Hub 5 webserver:

```
java -jar  marklogic-datahub-5.0.4.war
```

In a **web browser**, open the webpage:

	http://localhost:8888
	
Choose the repo folder and log into MarkLogic Server.

## Running

1. Go to the Flows tab and click on the 'Redeploy' button to deploy the deployment flows to the server. 
1. Then, run the load_keywords flow by clicking on the 'Run' button.
1. Next, run the load\_rocks\_docs flow.
1. On the Browse Data tab, select the load\_keywords collection to view the /keywords.json reference file.
1. Select the load\_docx collection to view the orginial Word documents
1. Select the docx_extract collection to view the 

***