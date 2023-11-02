function reboursF()
{
    let rebours = document.getElementById("rebours"),
        jour = document.getElementById("jour"),
        jour_label = document.getElementById("jour_label"),
        heure = document.getElementById("heure"),
        heure_label = document.getElementById("heure_label"),
        minute = document.getElementById("minute"),
        minute_label = document.getElementById("minute_label"),
        seconde = document.getElementById("seconde"),
        seconde_label = document.getElementById("seconde_label"),
        maintenant = new Date(),
        finannee = new Date('December 31, '+new Date().getFullYear()+' 23:59:59');

    let total_secondes = (finannee - maintenant) / 1000;
    
    if (total_secondes > 0)
    {
        let nb_jours = Math.floor(total_secondes / (60 * 60 * 24));
        let nb_heures = Math.floor((total_secondes - (nb_jours * 60 * 60 * 24)) / (60 * 60));
        let nb_minutes = Math.floor((total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60))) / 60);
        let nb_secondes = Math.floor(total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60 + nb_minutes * 60)));

        jour.textContent = caractere(nb_jours);
        heure.textContent = caractere(nb_heures);
        minute.textContent = caractere(nb_minutes);
        seconde.textContent = caractere(nb_secondes);

        jour_label.textContent = genre(nb_jours, 'jour');
        heure_label.textContent = genre(nb_heures, 'heure');
        minute_label.textContent = genre(nb_minutes, 'minute');
        seconde_label.textContent = genre(nb_secondes, 'seconde');        
    }

    setTimeout("reboursF();", 1000);
}

function genre(nb, libelle)
{
    return (nb > 1) ? libelle+'s' : libelle;
}

function caractere(nb)
{
    return (nb < 10) ? '0'+nb : nb;
}

reboursF();