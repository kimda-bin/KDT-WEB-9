import { useForm } from "react-hook-form";

export default function FormT1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //event 객체도 사용 가능함(data, event)
  const onValid = (data) => {
    console.log("onValid", data);
  };

  console.log("errors", errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("name", { required: "이름은 필수 항목입니다." })}
          placeholder="name"
        />
        {errors.name && (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        )}
        <br />
        <input
          type="number"
          //   {...register("age", {
          //     validate: {
          //       useNumber: (v) => v >= 0 || "0 이상의 숫자만 입력 가능합니다",
          //     },
          //   })}
          {...register("age", {
            min: { message: "0 이상의 숫자만 가능합니다", value: 0 },
          })}
          placeholder="age"
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
