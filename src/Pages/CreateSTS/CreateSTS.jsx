import {
    TextInput,
    Button,
    Group,
    Box,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const CreateSTS = () => {

    const form = useForm({
        initialValues: {
            ward: "",
            stsCapacity: "",
            coordinates: ""
        },
    });

    return (
        <Box maw={340} mx="auto">
            <Title className="text-center pb-8" order={1}>
                Create STS
            </Title>
            <form
                className="space-y-4"
                onSubmit={form.onSubmit((values) => {
                    values.stsCapacity = parseInt(values.stsCapacity);
                    console.log(values);
                })}
            >
                <TextInput
                    withAsterisk
                    label="Ward Number"
                    placeholder="Ward No."
                    required
                    {...form.getInputProps("ward")}
                />

                <TextInput
                    withAsterisk
                    label="STS Capacity"
                    placeholder="Capacity (Tonnes)"
                    required
                    {...form.getInputProps("stsCapacity")}
                />

                <TextInput
                    withAsterisk
                    label="STS GPS Coordinates"
                    placeholder="GPS Coordinates"
                    required
                    {...form.getInputProps("coordinates")}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default CreateSTS;
