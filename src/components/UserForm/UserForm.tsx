import { Button } from "antd";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface IUserFormProps {
  name?: string;
  id?: number;
  email?: string;
  phone?: string;
  edit: (id: number, name: string, email: string, phone: string) => void;
  setIsEditing: (arg: boolean) => void;
}

export default function UserForm(props: IUserFormProps) {
  const { id, name, email, phone, edit, setIsEditing } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: name || "",
      email: email || "",
      phone: phone || "",
    },
    mode: "onSubmit", // валидация только при сабмите
    reValidateMode: "onSubmit", // повторная валидация только при сабмите
  });

  function onSubmit(data: FormData) {
    if (id !== undefined) {
      edit(id, data.name, data.email, data.phone);
    } else {
      console.log("create new user");
    }
    setIsEditing(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        id="name"
        {...register("name", {
          required: "Имя обязательно для заполнения",
          minLength: {
            value: 2,
            message: "Имя должно содержать минимум 2 символа",
          },
        })}
      />
      {errors.name && <p role="alert">First name is required</p>}
      <label>Email</label>
      <input id="email" type="email" {...register("email")} />

      <label>Phone</label>
      <input id="name" type="phone" {...register("phone")} />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
}
