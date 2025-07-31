import { db } from '../firebase'
import { collection, getDocs, addDoc } from "firebase/firestore";
import type { PortfolioTypes } from '../types/PortfolioTypes';

const docRef = collection(db, "portfolios");

async function getPortfolios() {
  const docSnap = await getDocs(docRef);

  const results:PortfolioTypes[] = []
  docSnap.forEach((doc) => {
    results.push({
      id: doc.id,
      name: doc.data().name,
      description:doc.data().description,
      link: doc.data().link,
      linkText: doc.data().linkText,
      techStack: doc.data().techStack
    });
  });

  return results
}

async function addPortfolio(data: PortfolioTypes) {

  const response = await addDoc(docRef, data);
  
  return response
}

export {
  getPortfolios,
  addPortfolio
}