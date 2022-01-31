import GalleryImage from "./GalleryImage";
export default function Gallery() {
  return (
    <section className="gallery">
      <GalleryImage src={"images/desktop/image-gallery-milkbottles.jpg"} />
      <GalleryImage src={"images/desktop/image-gallery-orange.jpg"} />
      <GalleryImage src={"images/desktop/image-gallery-cone.jpg"} />
      <GalleryImage src={"images/desktop/image-gallery-sugarcubes.jpg"} />
    </section>
  );
}
