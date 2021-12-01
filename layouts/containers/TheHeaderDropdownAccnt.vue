<template>
  <CDropdown
    in-nav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          >
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell" /> Updates
      <CBadge color="info" class="ml-auto">
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="ml-auto">
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
  
   
    <CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    
 
    <CDropdownDivider />
   
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import { freeSet } from "@coreui/icons";
export default {
  name: 'TheHeaderDropdownAccnt',
   icons: { freeSet },
  data () {
    return {
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
