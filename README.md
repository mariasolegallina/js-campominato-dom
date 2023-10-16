# Campo minato

- creare la struttura html

- cliccare su "gioca" per cominciare a giocare:
    - aggiungere al bottone un'azione:
        - recuperare dal DOM l'elemento start-btn
         - aggiungere .addEventListener a startBtnElement
         - inviare al DOM gridDOMElement privo di contenuto

        - creare in js gli elementi della griglia e inviarli inviarli al DOM:
            - recuperare dal DOM l'elemento grid
             - con un ciclo for, generare le 100 caselle e inviarle al DOM:
                - generare 100 numeri (da 1 a 100)
                - dichiarare la variabile gridCell con il codice html della cella
                - inserire in gridCell i numeri generati dal ciclo for
                - inviare gli elementi della griglia al DOM (codice )

    - nel campo ci sono 16 mine:
        - generare 16 numeri random tra 1 e 100 (i numeri non devono ripetersi)
        - associare i numeri generati al numero corrispondente all'interno della griglia (queste celle saranno le mine)
        - SE l'utente clicca su una mina:
            - la cella si colora di rosso
            - la partita termina
        ALTRIMENTI SE l'utente clicca su una cella senza mina:
            la cella si colora di blu e il gioco presegue
