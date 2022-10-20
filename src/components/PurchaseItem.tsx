import { PurchaseShortEntry } from "../api/__generated__/api";
import "./PurchaseItem.css";

interface PurchaseListProps {
  purchaseShort: PurchaseShortEntry;
}

const PurchaseItem = ({ purchaseShort }: PurchaseListProps) => {
  return (
    <div className="purchase-item">
      <div>
        <h3>{purchaseShort.name}</h3>
        <div className="text-sm">{purchaseShort.cost}</div>
      </div>
      <div className="purchase-item__count text-sm">{purchaseShort.count}</div>
    </div>
  );
};

export default PurchaseItem;
