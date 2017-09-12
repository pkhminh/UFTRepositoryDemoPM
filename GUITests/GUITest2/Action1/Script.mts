Function SaisieDonnee_Liquidation_AdministratifTit
    Set MaPage = Browser("ASUR").Page("Administratif_Titulaire")
    If MaPage.Exist(20) Then
        wait 3
        reporter.ReportEvent micPass, "******************************Ecran Administratif_Titulaire******************************","L'écran existe"
        'Remplir tous les champs IHM modifiable grace au jdd fournie
        RemplirChampsModifiable MaPage, "Administratif"
    Else
        reporter.ReportEvent micFail, "******************************Ecran Administratif_Titulaire******************************","L'écran n'existe pas !"
    End if
    MaPage.link("Valider").Click
    Set MaPage = Nothing
End Function

'OM le 27/01/2016: Saisir dans l'IHM les champs modifiable dans L'ECRAN
Function RemplirChampsModifiable(Object, Sheet)
    'Set oCurrentSheet = FileReference.Worksheets(Sheet)
    ' Capture all objects
    Set WshShell = CreateObject("WScript.Shell")
    Set ObjectsDesc = Description.Create()
    ObjectsDesc( "disabled" ).value = "0"
    Set ObjectsCollection = Object.ChildObjects(ObjectsDesc)
        NumberOfObjects = ObjectsCollection.Count()

        ' Capture of names and contents
        refreshPage = false
        For i = 0 To NumberOfObjects - 1
            'Pour éviter de tomber dans l'erreur "General Run Error"
            If refreshPage = True Then
                Set ObjectsDesc = Description.Create()
                Set ObjectsCollection = Object.ChildObjects(ObjectsDesc)
                NumberOfObjects = ObjectsCollection.Count()
                refreshPage = False
            End If    
         Next
End function



RemplirChampsModifiable Browser("Accéder à Hotmail, Outlook,").Page("Accéder à Hotmail, Outlook,"),"" @@ hightlight id_;_Browser("Accéder à Hotmail, Outlook,").Page("Accéder à Hotmail, Outlook,").WebEdit("Rechercher :")_;_script infofile_;_ZIP::ssf1.xml_;_

