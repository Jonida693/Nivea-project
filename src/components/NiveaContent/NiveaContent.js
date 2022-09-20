import React from 'react'
import "./NiveaContent.scss"

function NiveaContent() {
  return (
    <>
      <section>
        <div className="content-area">
          <h2 className="content-headline"> #NIVEALIEBE</h2>
          <div className="content-zone">
            Entdecke NIVEA auf Instagram und teile deine schönsten Produktbilder
            mit #NIVEALIEBE!
          </div>
        </div>

        <div className="map">
          <h2 className="map-headliner">WIR BRAUCHEN IHRE EINWILLIGUNG</h2>
          <div className="map-content">
            {" "}
            <p>
              Dieser Inhalt wird von Squarelovin bereit gestellt. Wenn Sie den
              Inhalt aktivieren, werden ggf. personenbezogene Daten verarbeitet
              und Cookies gesetzt. Der externe Anbieter könnte dann den Aufruf
              und weitere Informationen für Werbung verwenden. Sie erklären sich
              damit einverstanden, dass die Daten auch an Drittstaaten außerhalb
              des Europäischen Wirtschaftsraumes ohne angemessenes
              datenschutzrechtliches Schutzniveau übermittelt werden (insb.
              USA). Es besteht dabei die Möglichkeit, dass Behörden auf die
              Daten Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen
              gibt. Sie können diese Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen. Weitere Informationen:Datenschutzerklärung.
            </p>
          </div>
          <div>
            <button type="button" className="picture-btn">
              AZEPTIEREN
            </button>
          </div>
          <div></div>

          <div>
            <div className="check-btn">
              <label className="label-btn">
                <a> Squarelovin immer akzeptieren </a>
              
                <input className="label" type="checkbox"></input>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="map-pharagraph">
        <div className="map-text">
          <p>
            *Der 5-€-Onlinegutschein und die geschenkten Versandkosten gelten
            für einen Einkauf ab einem Bestellwert von 20 €. Nicht mit anderen
            Beiersdorf-Aktionen kombinierbar. Ausgenommen Gutscheine. Das
            Angebot gilt vier Wochen ab Registrierung der geworbenen Person für
            das NIVEA FÜR MICH Treueprogramm.
          </p>
        </div>

        <div className="map-text2">
          <p>
            **Der Code für das Willkommensgeschenk kann einmalig innerhalb von
            vier Wochen nach Registrierung bei einer Bestellung im NIVEA Online
            Shop ab einem Mindestbestellwert von 20 € eingelöst werden. Das
            Geschenk wird nach Codeeingabe automatisch in den Warenkorb gelegt.
            Nur solange der Vorrat reicht. Keine Barauszahlung möglich. Nicht
            gültig für den Kauf von Gutscheinen. Nicht mit anderen Aktionen der
            Beiersdorf AG kombinierbar.
          </p>
        </div>
      </section>
    </>
  );
}

export default NiveaContent