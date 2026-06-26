import { companyInfo } from "@/lib/data";

export function GoogleMap() {
  const { lat, lng } = companyInfo.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-full min-h-[400px]">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 400 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MM Coconut Processing Unit Location"
      />
    </div>
  );
}
