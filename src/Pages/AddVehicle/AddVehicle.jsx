import { TextInput, Button, Group, Box, NativeSelect, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const AddVehicle = () => {
    const [typeValue, setTypeValue] = useState("");
    const [capacityValue, setCapacityValue] = useState("");

    const types = [
        "Open Truck",
        "Dump Truck",
        "Compactor",
        "Container Carrier",
    ];
    const capacities = [
        {
            label: "3 Ton",
            value: 3,
        },
        {
            label: "5 Ton",
            value: 5,
        },
        {
            label: "7 Ton",
            value: 7,
        },
    ];

    const form = useForm({
        initialValues: {
            loadedCost: "",
            unloadedCost: "",
            vehicleCapacity: capacities[0].value,
            vehicleNumber: "",
            vehicleType: types[0],
        },
    });

    return (
        <Box maw={340} mx="auto">
            <Title className="text-center pb-8" order={1}>Add A Vehicle</Title>
            <form
                className="space-y-4"
                onSubmit={form.onSubmit((values) => {
                    values.loadedCost = parseInt(values.loadedCost);
                    values.unloadedCost = parseInt(values.unloadedCost);
                    values.vehicleCapacity = parseInt(values.vehicleCapacity);
                    console.log(values);
                })}
            >
                <TextInput
                    withAsterisk
                    label="Vehicle Registration Number"
                    placeholder="Registration Number"
                    required
                    {...form.getInputProps("vehicleNumber")}
                />

                <NativeSelect
                    withAsterisk
                    value={typeValue}
                    label="Vehicle Type"
                    required
                    onChange={(event) =>
                        setTypeValue(event.currentTarget.value)
                    }
                    data={types}
                    {...form.getInputProps("vehicleType")}
                />

                <NativeSelect
                    withAsterisk
                    value={capacityValue}
                    label="Vehicle Capacity"
                    required
                    onChange={(event) =>
                        setCapacityValue(event.currentTarget.value)
                    }
                    data={capacities}
                    {...form.getInputProps("vehicleCapacity")}
                />

                <TextInput
                    withAsterisk
                    label="Fuel Cost (Unloaded)"
                    placeholder="Unloaded Fuel Cost (Tk)"
                    type="number"
                    required
                    min={0}
                    {...form.getInputProps("unloadedCost")}
                />

                <TextInput
                    withAsterisk
                    label="Fuel Cost (Fully Loaded)"
                    placeholder="Loaded Fuel Cost (Tk)"
                    type="number"
                    required
                    min={0}
                    {...form.getInputProps("loadedCost")}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default AddVehicle;
