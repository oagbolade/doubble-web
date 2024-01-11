import { useState, SyntheticEvent, Dispatch, SetStateAction } from "react";

interface FormProps {
    data: { label: string; icon: any };
}

const InternetForm = ({ data: { icon, label } }: FormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            e.currentTarget.classList.add("was-validated");
            if (!e.currentTarget.checkValidity()) return;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="p-2" noValidate onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-0">
                {icon}
            </div>
            <div className="text-center mb-3 mt-0">{label}</div>
            <div className="form-group">
                <select placeholder="Phone number" className="doubble-input w-100" required>
                    <option value="">Category</option>
                </select>
                <small className="invalid-feedback">* Required field</small>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Device ID" className="doubble-input w-100" required />
                <small className="invalid-feedback">* Required field</small>
            </div>
            <div className="form-group d-flex justify-content-center">
                <button
                    disabled={isLoading}
                    style={{ height: "var(--input-height)", border: "none", fontSize: "1.13em", borderRadius: "5px" }}
                    type="submit"
                    className="text-primary-blue bg-secondary-blue w-70 cursor-pointer"
                >
                    Buy
                </button>
            </div>
        </form>
    )
}

export default InternetForm
