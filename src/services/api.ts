import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import type { PortfolioTypes } from '../types/PortfolioTypes';

async function getPortfolios() {
  const docRef = collection(db, "portfolios");
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

export {
  getPortfolios
}