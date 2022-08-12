
import EventCategoryCarousel from "../EventCategoryCarousel";
import Map from "../Map";
export default function EventViewerPage() {
  return (
    <div className="flex flex-col items-center py-20 ">
      <h1 className="text-3xl ">CREATE, MANAGE, ENGAGE & SHARE SOCIAL EVENTS</h1>
      <EventCategoryCarousel />
      <Map />
    </div>
  );
}
