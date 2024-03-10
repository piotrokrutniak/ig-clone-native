import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { View, Text, TextInput, Button } from "react-native";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  age: z.number().positive(),
});

type FormData = z.infer<typeof schema>;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput {...register("name")} />
        {errors.name && <Text>{errors.name.message}</Text>}
      </View>

      <View>
        <Text>Email</Text>
        <TextInput {...register("email")} />
        {errors.email && <Text>{errors.email.message}</Text>}
      </View>

      <View>
        <Text>Age</Text>
        <TextInput {...register("age")} />
        {errors.age && <Text>{errors.age.message}</Text>}
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FormComponent;
