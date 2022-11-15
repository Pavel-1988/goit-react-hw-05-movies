import { useSearchParams } from "react-router-dom";


export const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
      <form>
        <input
          name="SearchQuery"
          
        />
        

        <button type="submit"> Search </button>
      </form>
)
  
}