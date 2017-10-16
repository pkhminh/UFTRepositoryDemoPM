Browser("Login").Page("Login").WebEdit("WebEdit").Set DataTable("User", dtGlobalSheet)
Browser("Login").Page("Login").WebEdit("WebEdit_2").SetSecure "59df4a0e18494d73d5e5f6a866108019f22bc7b765b1a690"
Browser("Login").Page("Login").WebButton("Login").Click
wait(10)
Browser("Login").Page("BACKLOG - Features").WebElement("BACKLOG").Click
Browser("Login").Page("BACKLOG - Features").Link("TEAM BACKLOG").Click
Browser("Login").Page("TEAM BACKLOG_2").WebButton("Team Management").Click
Browser("Login").CloseAllTabs

'Comment chouette
