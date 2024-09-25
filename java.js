
document.getElementById('info').addEventListener('click', function(){
    var newPageContent = `
        <div id="newPage">
            <h2>compétences informatiques</h2>
            ▪ Microsoft Office <br>
             WORD <br>
            Powerpoint <br>
            EXCEL <br>
            ▪ Outils de Développement {VS CODE}<br>
            ▪ Langages de Programmation<br>
             HTML <br>CSS<br>Bootstrap <br>
             Python <br>
            JavaScript<br>
            Php<br>
            ▪ Développement Front-End 'react'<br>
            ▪ Développement Back-End " laravelle" <br>
            ▪ Gestion de Projets <br>
            ▪ Bases de Données {MySQL, MongoDB} <br>

            <button id="backBtn" onclick="retour()" >Retour</button>
        </div>
            `;
    document.body.innerHTML = newPageContent;});
    function retour() {
        location.reload()
    };

    document.getElementById('pers').addEventListener('click', function(){
        var newPageContent = `
            <div id="newPage">
                <h2>compétences personelles </h2>
                ▪ Travail strict  <br>
                ▪ leadership<br>
                ▪ Esprit d’équipe <br>
                ▪ Dynamique <br>
                ▪ sérieuse <br>
                ▪ Planification <br>
                ▪ organisation<br>
                ▪  Capacité d’adaptation<br>
                ▪  Ponctuel<br>
                ▪ optimiste  <br>
                <button id="backBtn" onclick="retour()" >Retour</button>
            </div>
                `;
        document.body.innerHTML = newPageContent;});
        function retour() {
            location.reload()
        };

        document.getElementById('form').addEventListener('click', function(){
            var newPageContent = `
                <div id="newPage">
                    <h2>parcours scolaire </h2>
                   ✓ ETUDIANTE 2eme ANNEE EN DEVELOPPEMENT DIGITAL <br>
                 - Filière full stack « Centre de formation NTIC 2 » (2024/2025)<br>
                    ✓ CERTIFICAT DIGITAL INFORMATIQUE BASIQUE <br>
                    -Bibliothèque de proximité BEN MSIK (2023)<br>
                    ✓ BACCALAUREAT INTERNATIONAL (2022/2023)<br>
                    ✓ DIPLOME EN RESTAURATION <br>
                    -Complexe éducatif et social EL DWAM (2022/2023) <br>
                    ✓ BACCALAUREAT PROFESSIONNEL<br>
                    -Lycée qualifiant TAHA HOUSSEINE (2021/2022)<br>
                    <button id="backBtn" onclick="retour()" >Retour</button>
                </div>
                    `;
            document.body.innerHTML = newPageContent;});
            function retour() {
                location.reload()
            };
        
            document.getElementById('exp').addEventListener('click', function(){
                var newPageContent = `
                    <div id="newPage">
                        <h2>experience profesionelle </h2>
                      <h3>   o Stage chez societe el ghali sanitaire (1mois)</h3> 
                        - Maîtrise des outils bureautiques, Gestion des réseaux sociaux<br>
- Accueil des clients, gestion des appels téléphoniques et des rendez-vous<br>
-Saisie des données dans l’ordinateur<br> <br>

 <h3>o Commercial freelance </h3>
- Gestion de la relation client, Prospection commerciale, Conception et 
publication de postes <br> <br>
                        <h3> o Stage dans L’HOTEL IBIS sidi maarouf (1 mois)</h3> 
                        -Travail come garde mange et préparation du buffet de 
                        petit déjeunée  <br> <br>
                         <h3>o Travail dans un magasin des produits alimentaires 
                        pendant (3mois) </h3> <br>
                        <button id="backBtn" onclick="retour()">Retour</button>
                    </div>
                        `;
                document.body.innerHTML = newPageContent;});
                function retour() {
                    location.reload()
                };
                document.getElementById('more').addEventListener('click', function(){
                    var newPageContent = `
                        <div id="newPage">
                            <h2> plus d'inormations  </h2>
                            *+212 669176501 <br>
                            *Ilhambarakat03@gmail.com<br>
                            *LinkedIn/ily ilham<br>
                            *Casablanca, MAROC<br>
                            *2005/03/28 <br>
                            *Permis de conduire (B)<br>
                            *arabe :langue maternlle<br>
                            *francais :niveau excllent<br>
                            *anglais :niveau moyenne<br>
                            <button id="backBtn" onclick="retour()" >Retour</button>
                        </div>
                            `;
                    document.body.innerHTML = newPageContent;});
                    function retour() {
                        location.reload()
                    };

