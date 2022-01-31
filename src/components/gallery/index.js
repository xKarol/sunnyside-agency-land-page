import GalleryImage from "./GalleryImage";
export default function Gallery() {
  return (
    <section className="gallery">
      <GalleryImage
        src={"images/desktop/image-gallery-milkbottles.jpg"}
        alt={"milk bottles"}
      />
      <GalleryImage
        src={"images/desktop/image-gallery-orange.jpg"}
        alt={"orange"}
      />
      <GalleryImage
        src={"images/desktop/image-gallery-cone.jpg"}
        alt={"cone"}
      />
      <GalleryImage
        src={"images/desktop/image-gallery-sugarcubes.jpg"}
        alt={"sugarcubes"}
      />
    </section>
  );
}
