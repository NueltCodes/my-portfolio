"use client";
import useAppModal from "@/lib/useAppModal";
import React from "react";

const AppModal = () => {
  const appModal = useAppModal();

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-50"
      onClick={() => appModal.onClose()}
    >
      AppModal
    </div>
  );
};

export default AppModal;
