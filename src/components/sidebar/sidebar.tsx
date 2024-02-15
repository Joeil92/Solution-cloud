import { getDatabase } from "@SC/services/firebase/firebase";
import { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState<any[]>([]);

    const onClick = (uid: string) => {
        setSearchParams(params => {
            if(params.get('c') === uid) {
                params.delete('c');
            } else {
                params.set('c', uid);
            }
            
            return params;
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatabase("categories");
            setCategories(data);
        }

        fetchData();
    }, []);

    return (
        <nav className={`${styles.sidenav}`}>
            <div className={styles.menuBar}>
                <div className={styles.menu}>
                    <ul className={styles.menuLinks}>
                        {categories.map((category) => (
                            <li key={category.id} onClick={() => onClick(category.id)} className={`${searchParams.toString().includes(category.id) ? styles.active : ""}`}>
                                <a href={category.pathname}>
                                    {category.icon}
                                    <span className={styles.text}>{category.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}