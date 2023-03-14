import AsideHomeFilter from "./AsideHomeFilter";
import AsideHomeSort from "./AsideHomeSort";

function SidebarFilter() {
  return (
    <aside>
      <div className="sidebar-items">
        <AsideHomeSort />
        <AsideHomeFilter />
      </div>
    </aside>
  );
}

export default SidebarFilter;
