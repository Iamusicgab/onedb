// @ts-nocheck

import { createContext, useState, useEffect } from "react";

import { auth, db } from "../components/firebase";

import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	doc,
	getDoc,
} from "firebase/firestore";

import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext<any>(null);
const provider = new GoogleAuthProvider();

export const UserContext = ({ children }: any) => {
	const [currentUser, setCurrentUser] = useState<any>(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(false);
			if (user) {
				setCurrentUser(user);
				console.log(user);
				console.log(user.email);
			} else {
				setCurrentUser(null);
				console.log("No sign in user");
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<AuthContext.Provider value={currentUser}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

const signInWithGoogle = async () => {
	try {
		return await signInWithPopup(auth, provider);
	} catch (err) {
		console.error(err);
	}
};

const getAnnouncements3 = async () => {
	const q = query(
		collection(db, "announcements"),
		orderBy("date", "desc"),
		limit(1)
	);
	const announcementsQuery = await getDocs(q);
	return announcementsQuery;
};

const getAnnouncements = async () => {
	const q = query(collection(db, "announcements"), orderBy("date", "desc"));
	const announcementsQuery = await getDocs(q);
	return announcementsQuery;
};

const gradesGrade = async (email: any) => {
	const q = doc(db, "students", email);

	const gradesQuery = await getDoc(q);
	const data = gradesQuery.data();
	return data.grades;
};

const getGrades = async (email: any, gradeLevel: any) => {
	const q = doc(db, "students", email);
	const gradesQuery = await getDoc(q);
	const data = gradesQuery.data().grades[gradeLevel];
	console.log(data);
	return data;
};

const getStudentData = async (email: any) => {
	const q = doc(db, "students", email);
	const studentQuery = await getDoc(q);
	const data = studentQuery.data();
	return data;
};

const logout = async () => {
	try {
		await auth.signOut();
	} catch (err) {
		console.error(err);
	}
};

export default UserContext;
export {
	AuthContext,
	signInWithGoogle,
	getAnnouncements3,
	getAnnouncements,
	gradesGrade,
	getGrades,
	getStudentData,
	logout,
};
