import { Modal } from "antd";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import type { CreateUser, EditUser, IUser } from "../../types";
import { v4 as uuidv4 } from "uuid";
import type { FormData } from "../../types";

interface IUserFormProps {
  initialUserData?: IUser;
  editUser?: EditUser;
  createUser?: CreateUser;
  isOpen: boolean;
  onClose: (arg: boolean) => void;
}

export default function UserForm({
  initialUserData,
  isOpen,
  onClose,
  editUser,
  createUser,
}: IUserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      id: initialUserData?.id || uuidv4(),
      name: initialUserData?.name || "",
      email: initialUserData?.email || "",
      phone: initialUserData?.phone || "",
    },
    mode: "onChange",
  });

  function onSubmit(userData: FormData) {
    if (editUser !== undefined) {
      editUser(userData);
    } else if (createUser !== undefined) {
      createUser(userData);
    }
    onClose(false);
  }

  return (
    <Modal
      open={isOpen}
      onCancel={() => onClose(false)}
      okButtonProps={{ htmlType: "submit", form: "user-edit-form" }}
    >
      <form
        id="user-edit-form"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Name</label>
        <input
          className={styles.input}
          id="name"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && (
          <p role="alert" className={styles.error}>
            name is required
          </p>
        )}
        <label>Email</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && (
          <p role="alert" className={styles.error}>
            email is required
          </p>
        )}
        <label className={styles.label}>Phone</label>
        <input
          className={styles.input}
          id="phone"
          type="tel"
          {...register("phone", {
            required: true,
          })}
        />
        {errors.phone && (
          <p role="alert" className={styles.error}>
            phone is required
          </p>
        )}
      </form>
    </Modal>
  );
}
