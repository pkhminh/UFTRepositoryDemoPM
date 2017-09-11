Browser("Browser").Page("Google").WebList("alm octane online helpalm").Select "alm octane online help"
Browser("Browser").Page("Google").WebEdit("Rech.").Set "alm octane on"
Browser("Browser").Page("alm octane online help").Link("HPE ALM Octane Help Center").Click
Browser("Browser").Page("ALM Octane Help Center").Image("_TopNav_hl-get-started").FireEvent "onmouseover"
Browser("Browser").Page("ALM Octane Help Center").Image("_TopNav_hl-whats-new").FireEvent "onmouseover"
Browser("Browser").Page("ALM Octane Help Center").Image("_TopNav_hl-whats-new").Click
Browser("Browser").Page("What's new in 12.55.6").Sync @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").CloseAllTabs

