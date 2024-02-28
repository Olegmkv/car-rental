import { useState } from "react"
import { useDispatch} from 'react-redux';
import { changeModel, changeRentalPrice } from "../redux/paramsSlice";

export const ParamsSearch = () => {
    const dispatch = useDispatch();
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedRentalPrice, setRentalPrice] = useState("");

    const handlechangeModel = (e) => {
        setSelectedModel(e.target.value);
        dispatch(changeModel(e.target.value))
    };
    
    const handleChangeRentalPrice = (e) => {
        setRentalPrice(e.target.value);
        dispatch(changeRentalPrice(e.target.value))
    };    
    
    return (
        <div>
            <select value={selectedModel} onChange={handlechangeModel}>
                <option value="">All models</option>
                <option value="model 1">model 1</option>
                <option value="model 2">model 2</option>
                <option value="Buick">Buick</option>
                <option value="Volvo">Volvo</option>
                <option value="HUMMER">HUMMER</option>
                <option value="Subaru">Subaru</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Lincoln">Lincoln</option>
                <option value="GMC">GMC</option>
                <option value="Hyundai">Hyundai</option>
                <option value="MINI">MINI</option>
                <option value="Bentley">Bentley</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Pontiac">Pontiac</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Kia">Kia</option>
                <option value="Land">Land</option>
            </select>

            <select value={selectedRentalPrice} onChange={handleChangeRentalPrice}>
                <option value="">No change</option>
                <option value="rentalPrice 2">rentalPrice 2</option>
                <option value="rentalPrice">rentalPrice</option>
                <option value="$10">10</option>
                <option value="$20">20</option>
                <option value="$30">30</option>
                <option value="$40">40</option>
                <option value="$50">50</option>
                <option value="$60">60</option>
                <option value="$70">70</option>
                <option value="$80">80</option>
                <option value="$90">90</option>
                <option value="$100">100</option>
                <option value="$110">110</option>
                <option value="$120">120</option>
                <option value="$130">130</option>
                <option value="$140">140</option>
                <option value="$150">150</option>
                <option value="$200">200</option>
                <option value="$300">300</option>
         </select>
        </div>
    )
}