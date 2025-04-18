

const Seo = ({ title, description, canonical, image, schemaMarkup }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    {/* Open Graph for Facebook, LinkedIn */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter Card */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Structured Data (Schema Markup) */}
    {schemaMarkup && <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>}
  </>
);

export default Seo;
