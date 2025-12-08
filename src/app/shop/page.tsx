type Props = {
  params: {
    shop: string;
  };
};

export default function shopPage({ params }: Props) {
  const { shop } = params;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">{ shop } Details</h1>

      {shop === "nykaa" && (
        <p className="text-gray-700">
          Nykaa is a beauty and wellness e-commerce platform.
        </p>
      )}

      {shop === "meesho" && (
        <p className="text-gray-700">
          Meesho is an online shopping and reselling platform.
        </p>
      )}

      <p className="text-gray-600">
        This is the details page for {shop}. You can add more info, images, API data, etc.
      </p>
    </div>
  );
}
