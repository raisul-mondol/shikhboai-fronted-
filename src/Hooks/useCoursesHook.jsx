import { useEffect, useState } from "react";
import { getCourses } from "../Components/Services/Coursesapi";

function useCoursesHook() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getCourses();

      setCourses(data);
    } catch (error) {
      setError("Failed to load Courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error
  };
}

export default useCoursesHook;