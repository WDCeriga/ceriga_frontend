import { FC, useState } from "react";

import { IUserDashboard } from "@interfaces/bll/dashboard.interface";
import ModalLayout from "@common/Layouts/Modal/Layout";

import BodyUsersTable from "./Body/Body";
import HeadUserTable from "./Head/Head";
import ChangeManufacturerModal from "./ModalContent/ModalContent";
import s from "./table.module.scss";

interface TableUsersProps {
  currentPage: number;
  itemsPerPage: number;
  users: IUserDashboard[]
}

const TableUsers: FC<TableUsersProps> = ({ currentPage, itemsPerPage, users }) => {
  const [modalOpen, setModalOpen] = useState<string>("");

  const handleToggleModal = (id: string) => {
    setModalOpen(id);
  };

  return (
    <>
      <table className={s.table}>
        <HeadUserTable />
        <BodyUsersTable
         users={users}
          handleToggleModal={handleToggleModal}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </table>
      {modalOpen !== "" && (
        <ModalLayout handleClose={() => handleToggleModal("")}>
          <ChangeManufacturerModal
            handleClose={() => handleToggleModal("")}
            id={modalOpen}
          />
        </ModalLayout>
      )}
    </>
  );
};

export default TableUsers;