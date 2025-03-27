const LegalPage = () => {
    return (
      <section className="max-w-4xl mx-auto py-20 px-6 text-dark">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Conditions d'utilisation & Politique de confidentialité
        </h1>
  
        {/* Conditions d'utilisation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Conditions Générales d'Utilisation</h2>
          <p className="mb-4">
            En accédant au site <strong>www.jimmylalin.com</strong>, vous acceptez pleinement et sans réserve
            les conditions générales d'utilisation décrites ci-après. Ces conditions sont susceptibles
            d’être modifiées ou complétées à tout moment.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Le site est mis à jour régulièrement pour refléter l’actualité de Jimmy Lalin.</li>
            <li>Toute reproduction ou utilisation des contenus (textes, images, vidéos) sans autorisation est interdite.</li>
            <li>Tout comportement nuisible ou illégal pourra faire l’objet de sanctions légales.</li>
          </ul>
        </div>
  
        {/* Politique de confidentialité */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Politique de Confidentialité</h2>
          <p className="mb-4">
            La confidentialité de vos données est une priorité. Ce site ne collecte aucune donnée personnelle
            sans votre consentement explicite.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Des outils d’analyse anonymisés peuvent être utilisés pour mesurer l’audience du site (ex : Google Analytics).
            </li>
            <li>
              En cas de formulaire de contact, les données sont strictement utilisées pour répondre à vos demandes.
            </li>
            <li>
              Vos données ne sont ni vendues ni transmises à des tiers.
            </li>
          </ul>
        </div>
  
        {/* Mentions techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Hébergement & Responsable</h2>
          <p className="mb-2">
            <strong>Responsable de publication :</strong> Jimmy Lalin ou son représentant légal.
          </p>
          <p className="mb-2">
            <strong>Développement & Design :</strong> <a href="https://www.innovpower.io" target="_blank" className="text-primary underline">InnovPower</a>
          </p>
          <p>
            <strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </div>
  
        {/* Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Utilisation des cookies</h2>
          <p>
            Ce site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer
            votre navigateur pour refuser les cookies ou être averti de leur utilisation.
          </p>
        </div>
  
        {/* Droit applicable */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Droit applicable</h2>
          <p>
            Ces présentes conditions sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort de Chambéry.
          </p>
        </div>
      </section>
    );
  };
  
  export default LegalPage;
  