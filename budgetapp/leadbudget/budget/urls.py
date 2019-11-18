from rest_framework import routers
from .api import BudgetViewSet

router = routers.DefaultRouter()
router.register('api/budget', BudgetViewSet, 'budget')

urlpatterns = router.urls