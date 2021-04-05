import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ProjectCart from "../components/ProjectCart"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data";
import { Category } from "../types";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");
    const [showDetail, setShowDetail] = useState<number|null>(null);

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };
    return (
        <motion.div
            variants={routeAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit"
            className="px-5 py-2 overflow-y-scroll" 
            style={{ height: '65vh' }}
        >
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <motion.div 
                variants={stagger}
                initial="initial"
                animate="animate"
                className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map((project, i) => (
                    <motion.div variants={fadeInUp} key={i} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                        <ProjectCart project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects
