import { useContext } from "react";
import { ContextEvent } from "../contexts/ContextEvent";

export const useEvents = () => useContext(ContextEvent);
