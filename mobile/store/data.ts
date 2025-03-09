import { create } from "zustand"

export type DataUser = {
	name: string;
	weight: string;
	age: string;
	height: string;
	level: string;
	objective: string;
	gender: string;
}

type DataState = {
	dataUser: DataUser;
	setPageOne: (data: Omit<DataUser, "gender" | "objective" | "level">) => void;
	setPageTwo: (data: Pick<DataUser, "gender" | "objective" | "level">) => void;
}

export const useDataStore = create<DataState>((set) => ({
	dataUser: {
		name: "",
		age: "",
		level: "",
		objective: "",
		gender: "",
		height: "",
		weight: ""
	},

	setPageOne: (data) => set((state) => ({dataUser: {...state.dataUser, ...data} })),

	setPageTwo: (data) => set((state) => ({dataUser: {...state.dataUser, ...data} })),
}))