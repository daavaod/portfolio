import { db } from '../firebase'
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import type { PortfolioTypes, NewPortfolioType } from '../types/PortfolioTypes';

const docRef = collection(db, "portfolios");

async function getPortfolios(): Promise<PortfolioTypes[]> {
  const snapshot = await getDocs(docRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as PortfolioTypes[];
}

async function addPortfolio(data: NewPortfolioType) {

  const res = await addDoc(docRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return { id: res.id};
}

async function deletePortfolio(id: string) {
  console.log(id)
  
}

export {
  getPortfolios,
  addPortfolio,
  deletePortfolio
}