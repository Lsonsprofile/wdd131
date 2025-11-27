// scripts/review.js

// Update footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Get URL parameters (from form submission)
const params = new URLSearchParams(window.location.search);
const detailsDiv = document.getElementById("reviewDetails");

// Required product list (exact match for assignment)
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Find product name from ID
const productId = params.get("productName");
const product = products.find(p => p.id === productId);
const productName = product 
  ? product.name.charAt(0).toUpperCase() + product.name.slice(1)
  : "Unknown Product";

// Helper: add a line to the summary
function addDetail(label, value) {
  if (value) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${label}:</strong> ${value}`;
    detailsDiv.appendChild(p);
  }
}


// We only count if this is a real form submission (has productName and rating)
if (productId && params.get("rating")) {
  // Use a unique key for this exact submission
  const submissionKey = `submitted_${productId}_${params.get("installDate")}_${params.get("rating")}`;

  // Only increment if we've never seen this exact submission before
  if (!sessionStorage.getItem(submissionKey)) {
    sessionStorage.setItem(submissionKey, "true");  // mark as counted this browser session

    let totalCount = Number(localStorage.getItem("reviewCount") || 0);
    totalCount++;
    localStorage.setItem("reviewCount", totalCount);
    document.getElementById("reviewCount").textContent = totalCount;
  } else {
    // Already counted this submission → just show current total
    document.getElementById("reviewCount").textContent = localStorage.getItem("reviewCount") || 0;
  }
} else {
  // No real submission (user just opened review.html directly or refreshed)
  document.getElementById("reviewCount").textContent = localStorage.getItem("reviewCount") || 0;
}

// Display the review details
addDetail("Product", productName);
addDetail("Rating", "★★★★★".substring(5 - params.get("rating")) + " (" + params.get("rating") + " stars)");
addDetail("Installation Date", params.get("installDate"));
addDetail("Useful Features", params.getAll("features").join(", ") || "None selected");
addDetail("Written Review", params.get("writtenReview"));
addDetail("Submitted By", params.get("userName"));