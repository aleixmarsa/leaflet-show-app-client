import Title from "../Title";
import EventCategoryCarousel from "../EventCategoryCarousel";
import Map from "../Map";
import { useState} from "react";

export default function EventViewerPage() {
  const [category, setCategory] = useState(null)

  const handleCategoryButton = (categorySelected) => {
  console.log("🚀 ~ file: EventViewerPage.js ~ line 10 ~ handleCategoryButton ~ categorySelected", categorySelected)
    setCategory(categorySelected)
  }
  return (
    <div className="flex flex-1 flex-col items-center mx-auto  py-20 w-full ">
      <div className=" flex flex-col items-start w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <Title />
        <EventCategoryCarousel handleButton={handleCategoryButton} />
        <Map category={category}/>
      </div>
    </div>
  );
}
