import type { Certification } from "./types";
import advancedAlgorithms from "../assets/certificate-advanced-algorithms.jpeg";
import supervisedMl from "../assets/certificate-supervised-ml.jpeg";

export const certifications: Certification[] = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University & DeepLearning.AI",
    year: "2023",
    summary:
      "Built and trained supervised models for prediction and binary classification, including linear and logistic regression.",
    credentialUrl:
      "https://coursera.org/share/df904b1dbaba802f68fa3be64ac7abd0",
    image: supervisedMl,
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "Stanford University & DeepLearning.AI",
    year: "2023",
    summary:
      "Neural networks, decision trees and the practical side of evaluating and tuning a model against real data.",
    credentialUrl:
      "https://coursera.org/share/eaded5adfe8fcd09629e537efdd739e8",
    image: advancedAlgorithms,
  },
];
