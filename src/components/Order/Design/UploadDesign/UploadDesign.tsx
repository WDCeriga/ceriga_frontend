
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { updateCommentStitching } from "@redux/slices/order";

import UploadFile from "../UploadFile/UploadFile";
import ButtonUploadDesign from "./Button/Button";
import TextareaUploadDesign from "./Textarea/Textarea";
import UploadDesignTop from "./Top/Top";
import s from "./uploadDesign.module.scss";

interface IUploadDesign {
  handleClose: () => void;
}
const UploadDesign: FC<IUploadDesign> = ({ handleClose }) => {
  const orderState = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  const { description } = useSelector(
    (state: RootState) => state.order.stitching
  );


  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleToggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleUpdateDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValue(event.currentTarget.value);
    dispatch(updateCommentStitching(descriptionValue));
  };

  // const handleDownload = () => {
  //  const doc = new jsPDF();
  //  doc.text("Example file", 10, 10);
  //  doc.save("example.pdf");
  //};
  const handleDownload = () => {

    let filePath = "";
    switch (orderState.name) {
      case "Crewneck":
        filePath = "pdf/Ceriga Tech Pack Design Submission Guide (Crewneck).pdf";
        break;
      case "Sweat Pants":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide (SweatPants).pdf";
        break;
      case "Tank Top":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide (Tank Top).pdf";
        break;
      case "T-shirt":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide (Tshirt).pdf";
        break;
      case "Hoodie":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide (Hoodie).pdf";
        break;
      case "Zip Up Hoodie":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide (ZipUp Hoodie).pdf";
        break;
      case "Uncuffed":
        filePath = "/pdf/Ceriga Tech Pack Design Submission Guide(Uncuffed Sweatpants).pdf";
        break;

    }
    const link = document.createElement("a");// Create a temporary link element
    link.download = filePath.split("/").pop(); // Extract the file name for download
  console.log(filePath);

    link.href = filePath;
    document.body.appendChild(link);
    console.log(filePath);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up the temporary link
    document.body.removeChild(link);
    console.log(orderState.name);
  };

  return (
    <>
      <section className={s.container}>
        <UploadDesignTop handleClose={handleClose} />
        <TextareaUploadDesign
          value={descriptionValue}
          onChange={handleUpdateDescription}
        />
        <ButtonUploadDesign onEvent={handleDownload} text="Download PDF" />
        <ButtonUploadDesign onEvent={handleToggleModal} />
      </section>
      {modalOpen && (
        <UploadFile type="uploadDesign" handleClose={handleToggleModal} />
      )}
    </>
  );
};

export default UploadDesign;
