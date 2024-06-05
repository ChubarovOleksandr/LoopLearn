import { useDispatch, useSelector } from "react-redux";
import { setSectionName } from "../../redux/slice/sectionsSlice";

const CreateSectionName = ({ }) => {

   const dispatch = useDispatch();

   const name = useSelector(state => state.section.newSection.name);
   
   const onChangeSectionName = (value) => {
      dispatch(setSectionName(value));
   }

   return (
      <div className="form__part">
         <span className="highlighted">Введите название</span>
         <input type="text" maxLength={40} value={name} onChange={(e) => onChangeSectionName(e.target.value)} />
      </div>
   );
}

export default CreateSectionName;